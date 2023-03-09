import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator'

export default function useNamer() {
  return uniqueNamesGenerator({
    dictionaries: [colors, adjectives, animals],
    separator: '-',
    style: 'lowerCase',
    length: 3,
  })
}
