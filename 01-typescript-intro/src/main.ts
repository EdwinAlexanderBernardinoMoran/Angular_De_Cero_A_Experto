import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
// import './topics/01-basic-types.ts';
// import './topics/02_object_interface.ts';
// import './topics/03_function_basic.ts';
// import './topics/04_homekork_types.ts';
// import './topics/05_basic_destructuring.ts';
// import './topics/06_function_destructuring.ts';
// import './topics/07_import_export.ts';
// import './topics/08_clases.ts';
// import './topics/09_priorizar_composicion_sobre_herencia.ts';
import './topics/10_generics.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Hola mundo</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
