import React from 'react';
  
  const Utils = () =>  {
	return (
	  <div>
	  </div>
	);
  }
  
  export default Utils;
  import React from 'react';
  
  const Utils = () =>  {
	return (
	  <div>
	  </div>
	);
  }
  
  export default Utils;
  import { clearCaches } from "../measurement/position_measurement.js"

export function themeChanged(cm) {
  cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
    cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-")
  clearCaches(cm)
}
