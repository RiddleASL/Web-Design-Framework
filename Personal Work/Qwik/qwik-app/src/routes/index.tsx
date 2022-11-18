import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  

  const test = useStore({
    name:"",
  });

  return (
    <div>
      <h2>What is your name?</h2>
      <span>Type your name here:
        <input
          value={test.name}
          onInput$ = {(ev) => test.name = (ev.target as HTMLInputElement).value}
        />

        <hr />
        <h1>Welcome {test.name}!</h1>
      </span>

    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
