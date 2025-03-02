import { FakeOptions, fake } from './core/core';
import { data } from './word.json';
import { rand } from './rand';

export interface WordOptions extends FakeOptions {
  capitalize?: boolean;
}

function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Generate a random word.
 *
 * @category text
 *
 * @example
 *
 * randWord()
 *
 * @example
 *
 * randWord({ capitalize: true })
 *
 * @example
 *
 * randWord({ length: 10 })
 *
 */
export function randWord<Options extends WordOptions>(options?: Options) {
  const factory = () => {
    let word = rand(data);

    if (options?.capitalize) {
      word = capitalizeFirstLetter(word);
    }

    return word;
  };

  return fake(factory, options);
}
