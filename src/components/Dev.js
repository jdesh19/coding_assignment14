import React from 'react';
import { developerSetup } from '../data';

export default function Dev() {
  return (
    <section id="dev" className="py-8" >
      <div>
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">Developer Setup</h1>
        <div>
          <h2>VSCode Setup</h2>
          <pre>{developerSetup.vscode}</pre>
        </div>
        <div>
          <h2>Terminal Setup</h2>
          <pre>{developerSetup.terminal}</pre>
        </div>
        <div>
          <h2>Preferred Editor Font</h2>
          <p>{developerSetup.editor_font}</p>
        </div>
      </div>
    </section>
  );
}
