import { createSignal, createEffect, For, Show } from 'solid-js';
import loadPeriodicTable from './utils/loadPeriodicTable.js';
import check from './utils/check.js';

const App = () => {
    const symbols = loadPeriodicTable();
    const [word, setWord] = createSignal('');
    const [noWordFound, setNoWordFound] = createSignal(false);
    const [elements, setElements] = createSignal([]);

    createEffect(() => {
        setNoWordFound(false);
        setElements(check(word(), symbols));
        if (word() && elements().length === 0) {
            setNoWordFound(true);
        }
    });

    return (
        <>
            <form
                class='input'
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    setWord(formData.get('word'));
                }}
            >
                Word: <input type='text' name='word' autoComplete='off' />
                &nbsp;
                <button type='Submit'>spell</button>
            </form>
            <hr />

            <Show when={noWordFound()}>
                <strong>-- couldn't spell it! --</strong>
            </Show>
            <div class='word-spelling'>
                <For each={elements()}>
                    {(element) => (
                        <div class='element'>
                            <div class='number'>{element.number}</div>
                            <div class='symbol'>{element.symbol}</div>
                            <div class='name'>{element.name}</div>
                        </div>
                    )}
                </For>
            </div>
        </>
    );
};

export default App;
