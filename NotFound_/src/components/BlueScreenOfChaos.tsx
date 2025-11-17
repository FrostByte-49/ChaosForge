import { X } from 'lucide-react';

interface Props {
  onClose: () => void;
}

export default function BlueScreenOfChaos({ onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-blue-700 z-[100] flex items-center justify-center p-8 animate-flash-once">
      <div className="max-w-2xl">
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-8xl font-black text-white">:(</h1>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        <div className="space-y-6 text-white font-mono">
          <p className="text-2xl font-bold">
            Your PC ran into a problem and needs to restart due to excessive chaos.
          </p>

          <p className="text-xl">
            We're just collecting some error info, and then we'll restart for you.
          </p>

          <p className="text-lg opacity-80">0% complete</p>

          <div className="mt-12 space-y-2 text-sm opacity-60">
            <p>For more information about this issue and possible fixes, visit:</p>
            <p className="text-blue-200">https://chaos.com/stop/0x000000DESIGN_NOT_FOUND</p>
          </div>

          <div className="mt-8 space-y-1 text-xs opacity-40">
            <p>If you call a support person, give them this info:</p>
            <p>Stop code: CHAOTIC_UI_EXCEPTION</p>
            <p>What failed: design_principles.sys</p>
          </div>
        </div>
      </div>
    </div>
  );
}
