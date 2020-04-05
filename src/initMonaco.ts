import "./__pre";

// @ts-ignore
self.MonacoEnvironment = {
  getWorker(_moduleId: string, _label: string) {
    return new Worker("editor.worker.js");
  }
};
