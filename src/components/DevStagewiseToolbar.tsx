'use client';
import { useEffect, useState } from 'react';

function DevStagewiseToolbar() {
  const [Toolbar, setToolbar] = useState<React.ComponentType<Record<string, unknown>> | null>(null);
  const [ReactPlugin, setReactPlugin] = useState<unknown>(null);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      import('@stagewise/toolbar-next').then(mod => {
        setToolbar(() => mod.StagewiseToolbar);
      });
      import('@stagewise-plugins/react').then(mod => {
        setReactPlugin(() => mod.ReactPlugin);
      });
    }
  }, []);

  if (!Toolbar || !ReactPlugin) return null;
  return <Toolbar config={{ plugins: [ReactPlugin as never] }} />;
}

export default DevStagewiseToolbar; 