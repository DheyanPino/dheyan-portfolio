"use client";
import React, { useState, useMemo } from "react";
import { Cpu, Trash, Award } from "@/components/icons";
import { Button } from "@/components/ui/button";

// --- Type Definitions ---
interface Process {
  id: number;
  name: string;
  at: number; // Arrival Time
  bt: number; // Burst Time
  ct: number; // Completion Time (calculated)
  tat: number; // Turnaround Time (calculated)
  wt: number; // Waiting Time (calculated)
}

interface Metrics {
  avgWt: number;
  avgTat: number;
}

interface GanttBlock {
  name: string;
  start: number;
  end: number;
  color: string;
}

// --- Colors for Gantt Chart Blocks ---
const COLOR_PALETTE = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-teal-500",
  "bg-orange-500",
  "bg-pink-500",
];

// --- FCFS Calculation Logic ---
const calculateFCFS = (
  processes: Process[]
): {
  calculatedProcesses: Process[];
  metrics: Metrics;
  gantt: GanttBlock[];
} => {
  if (!processes.length) {
    return {
      calculatedProcesses: [],
      metrics: { avgWt: 0, avgTat: 0 },
      gantt: [],
    };
  }

  const sortedProcesses = [...processes].sort(
    (a, b) => a.at - b.at || a.id - b.id
  );

  let currentTime = 0;
  let totalWt = 0;
  let totalTat = 0;
  const calculatedProcesses: Process[] = [];
  const gantt: GanttBlock[] = [];
  const colorMap = new Map<number, string>();

  sortedProcesses.forEach((p) => {
    const start = Math.max(currentTime, p.at);
    const ct = start + p.bt;
    const tat = ct - p.at;
    const wt = start - p.at;

    totalWt += wt;
    totalTat += tat;

    if (!colorMap.has(p.id)) {
      colorMap.set(p.id, COLOR_PALETTE[colorMap.size % COLOR_PALETTE.length]);
    }
    const color = colorMap.get(p.id)!;

    if (start > currentTime) {
      gantt.push({
        name: "IDLE",
        start: currentTime,
        end: start,
        color: "bg-gray-400 dark:bg-gray-700",
      });
    }

    gantt.push({
      name: p.name,
      start: start,
      end: ct,
      color: color,
    });

    calculatedProcesses.push({
      ...p,
      ct: ct,
      tat: tat,
      wt: wt,
    });

    currentTime = ct;
  });

  const numProcesses = processes.length;
  const metrics: Metrics = {
    avgWt: totalWt / numProcesses,
    avgTat: totalTat / numProcesses,
  };

  return { calculatedProcesses, metrics, gantt };
};

// --- Sub-components (Kept in one file for simulator modularity) ---
const ProcessInput: React.FC<{
  onAdd: (at: number, bt: number) => void;
  onClear: () => void;
}> = ({ onAdd, onClear }) => {
  const [arrival, setArrival] = useState<number | "">("");
  const [burst, setBurst] = useState<number | "">("");

  const handleAdd = () => {
    if (arrival !== "" && burst !== "" && arrival >= 0 && burst > 0) {
      onAdd(Number(arrival), Number(burst));
      setArrival("");
      setBurst("");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,0.8)] dark:shadow-[8px_8px_0px_rgba(255,255,255,0.1)] border-4 border-black dark:border-gray-800 w-full">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 border-b-2 border-dashed border-gray-300 dark:border-gray-700 pb-2">
        Add New Process
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-600 dark:text-gray-400">
            Arrival Time (AT)
          </label>
          <input
            type="number"
            min="0"
            value={arrival}
            onChange={(e) =>
              setArrival(
                e.target.value === ""
                  ? ""
                  : Math.max(0, parseInt(e.target.value))
              )
            }
            className="w-full p-3 rounded-xl border-2 border-black dark:border-gray-700 bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-red-500 font-mono text-lg text-black dark:text-white placeholder-gray-500 shadow-inner"
            placeholder="e.g., 0, 5"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-600 dark:text-gray-400">
            Burst Time (BT)
          </label>
          <input
            type="number"
            min="1"
            value={burst}
            onChange={(e) =>
              setBurst(
                e.target.value === ""
                  ? ""
                  : Math.max(1, parseInt(e.target.value))
              )
            }
            className="w-full p-3 rounded-xl border-2 border-black dark:border-gray-700 bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-red-500 font-mono text-lg text-black dark:text-white placeholder-gray-500 shadow-inner"
            placeholder="e.g., 10, 4"
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <Button
            variant="success"
            className="flex-1 text-xl py-3"
            onClick={handleAdd}
            disabled={arrival === "" || burst === "" || Number(burst) <= 0}
        >
            + Add Process
        </Button>
        <Button
            variant="danger"
            className="flex-1 text-xl py-3"
            onClick={onClear}
        >
            <Trash className="w-5 h-5 mr-2 inline" /> Clear All
        </Button>
      </div>
    </div>
  );
};

const ProcessTable: React.FC<{
  processes: Process[];
  onDelete: (id: number) => void;
  calculatedProcesses: Process[];
}> = ({ processes, onDelete, calculatedProcesses }) => {
  const processMap = new Map(calculatedProcesses.map((p) => [p.id, p]));

  if (!processes.length) {
    return (
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,0.8)] dark:shadow-[8px_8px_0px_rgba(255,255,255,0.1)] border-4 border-black dark:border-gray-800 h-80 flex flex-col items-center justify-center w-full">
        <h3 className="text-3xl font-extrabold text-gray-500 dark:text-gray-600 text-center">
          Add a process to begin the simulation!
        </h3>
        <p className="text-lg text-gray-400 mt-2">
          Enter Arrival Time (AT) and Burst Time (BT) above.
        </p>
      </div>
    );
  }

  const headers = ["NAME", "AT", "BT", "CT", "TAT", "WT", "ACTION"];

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,0.8)] dark:shadow-[8px_8px_0px_rgba(255,255,255,0.1)] border-4 border-black dark:border-gray-800 w-full overflow-x-auto">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 border-b-2 border-dashed border-gray-300 dark:border-gray-700 pb-2">
        Process List & Results
      </h3>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="text-left bg-gray-100 dark:bg-gray-800 border-b-2 border-black dark:border-gray-700">
            {headers.map((header) => (
              <th
                key={header}
                className="p-2 text-sm font-extrabold text-gray-700 dark:text-gray-300 whitespace-nowrap"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...processes]
            .sort((a, b) => a.id - b.id)
            .map((p) => {
              const calculated = processMap.get(p.id);
              return (
                <tr
                  key={p.id}
                  className="border-b border-gray-200 dark:border-gray-800 hover:bg-yellow-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <td className="p-2 font-bold text-indigo-700 dark:text-indigo-400">{p.name}</td>
                  <td className="p-2 font-mono text-gray-900 dark:text-gray-300">{p.at}</td>
                  <td className="p-2 font-mono text-gray-900 dark:text-gray-300">{p.bt}</td>
                  <td className="p-2 font-mono text-green-700 dark:text-green-500 font-bold">
                    {calculated?.ct ?? ""}
                  </td>
                  <td className="p-2 font-mono text-red-700 dark:text-red-500 font-bold">
                    {calculated?.tat ?? ""}
                  </td>
                  <td className="p-2 font-mono text-blue-700 dark:text-blue-500 font-bold">
                    {calculated?.wt ?? ""}
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => onDelete(p.id)}
                      className="p-1 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-500 hover:bg-red-500 hover:text-white transition"
                      title="Delete Process"
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

const MetricsDisplay: React.FC<{ metrics: Metrics }> = ({ metrics }) => (
  <div className="bg-yellow-200 dark:bg-yellow-900/40 p-6 rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,0.8)] dark:shadow-[8px_8px_0px_rgba(255,255,255,0.1)] border-4 border-black dark:border-yellow-700 grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
    <h3 className="md:col-span-2 text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
      <Award className="w-6 h-6 mr-2 text-orange-600 dark:text-orange-400" /> Average Metrics
    </h3>
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-2 border-black dark:border-gray-600 shadow-inner">
      <p className="text-lg font-semibold text-gray-600 dark:text-gray-400">Avg. Waiting Time (WT)</p>
      <p className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-400 mt-1">
        {metrics.avgWt.toFixed(2)} ms
      </p>
    </div>
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-2 border-black dark:border-gray-600 shadow-inner">
      <p className="text-lg font-semibold text-gray-600 dark:text-gray-400">Avg. Turnaround Time (TAT)</p>
      <p className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-400 mt-1">
        {metrics.avgTat.toFixed(2)} ms
      </p>
    </div>
  </div>
);

const GanttChart: React.FC<{ gantt: GanttBlock[]; totalTime: number }> = ({
  gantt,
  totalTime,
}) => {
  if (!gantt.length) return null;
  const maxTime = totalTime > 20 ? totalTime + (totalTime % 5 === 0 ? 0 : 5 - (totalTime % 5)) : 20;
  const scaleFactor = 100 / maxTime;
  const markers = Array.from({ length: Math.floor(maxTime / 5) + 1 }, (_, i) => i * 5);

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,0.8)] dark:shadow-[8px_8px_0px_rgba(255,255,255,0.1)] border-4 border-black dark:border-gray-800 mt-8">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 border-b-2 border-dashed border-gray-300 dark:border-gray-700 pb-2">
        Gantt Chart (Execution Order)
      </h3>
      <div className="overflow-x-auto">
        <div className="relative h-20" style={{ width: `${maxTime * scaleFactor * 2}px`, minWidth: "100%" }}>
          {gantt.map((block, index) => (
            <div
              key={index}
              className={`absolute h-10 top-0 text-white flex items-center justify-center text-sm font-bold border-r-2 border-black dark:border-gray-900 ${block.color} transition-all duration-500 ease-out`}
              style={{
                left: `${block.start * scaleFactor * 2}%`,
                width: `${(block.end - block.start) * scaleFactor * 2}%`,
              }}
            >
              {block.name}
            </div>
          ))}
          <div className="absolute top-10 w-full h-10">
            {markers.filter((m) => m <= maxTime).map((time) => (
              <div
                key={time}
                className="absolute h-full border-l border-gray-500 dark:border-gray-600 text-xs text-gray-600 dark:text-gray-400 pt-1"
                style={{ left: `${time * scaleFactor * 2}%`, transform: "translateX(-50%)" }}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Section Component ---
export function FCFSSection() {
  const [processes, setProcesses] = useState<Process[]>([]);
  const [nextId, setNextId] = useState(1);

  const { calculatedProcesses, metrics, gantt } = useMemo(() => calculateFCFS(processes), [processes]);
  const totalTime = gantt.length > 0 ? gantt[gantt.length - 1].end : 0;

  const handleAddProcess = (at: number, bt: number) => {
    setProcesses((prev) => [...prev, { id: nextId, name: `P${nextId}`, at, bt, ct: 0, tat: 0, wt: 0 }]);
    setNextId((prev) => prev + 1);
  };

  const handleDeleteProcess = (id: number) => setProcesses((prev) => prev.filter((p) => p.id !== id));
  const handleClearAll = () => { setProcesses([]); setNextId(1); };

  return (
    <div className="min-h-screen bg-yellow-100 dark:bg-yellow-950/20 p-4 md:p-10 font-sans antialiased rounded-[2.5rem]">
      <header className="text-center mb-10 pt-4">
          <Button variant="secondary" className="mb-4" onClick={() => window.location.href = '/projects'}>
              &larr; Back to Projects
          </Button>
        <h1 className="block text-4xl md:text-5xl font-extrabold text-indigo-900 dark:text-indigo-400 border-b-8 border-black dark:border-gray-700 pb-4">
          <Cpu className="w-10 h-10 inline-block mr-3 text-red-600 dark:text-red-500" /> FCFS
          Scheduler Simulator
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-4">
          First-Come, First-Served (FCFS) CPU Scheduling Visualization.
        </p>
      </header>
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProcessInput onAdd={handleAddProcess} onClear={handleClearAll} />
          <ProcessTable processes={processes} onDelete={handleDeleteProcess} calculatedProcesses={calculatedProcesses} />
        </div>
        {processes.length > 0 && (
          <>
            <MetricsDisplay metrics={metrics} />
            <GanttChart gantt={gantt} totalTime={totalTime} />
          </>
        )}
      </div>
    </div>
  );
}
