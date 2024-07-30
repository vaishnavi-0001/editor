import React from 'react';
  
  const Mode_state = () =>  {
	return (
	  <div>
	  </div>
	);
  }
  
  export default Mode_state;
  import React from 'react';
  
  const Mode_state = () =>  {
	return (
	  <div>
	  </div>
	);
  }
  
  export default Mode_state;
  import { getMode } from "../modes.js"

import { startWorker } from "./highlight_worker.js"
import { regChange } from "./view_tracking.js"

// Used to get the editor into a consistent state again when options change.

export function loadMode(cm) {
  cm.doc.mode = getMode(cm.options, cm.doc.modeOption)
  resetModeState(cm)
}

export function resetModeState(cm) {
  cm.doc.iter(line => {
    if (line.stateAfter) line.stateAfter = null
    if (line.styles) line.styles = null
  })
  cm.doc.modeFrontier = cm.doc.highlightFrontier = cm.doc.first
  startWorker(cm, 100)
  cm.state.modeGen++
  if (cm.curOp) regChange(cm)
}
