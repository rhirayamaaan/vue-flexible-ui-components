import { camelize } from 'vue'

export const toAttrsWithoutProps = <
  A extends Record<string, unknown>,
  P extends Record<string, unknown>
>(
  attrs: A,
  props: P,
  keys: string[] = ['class']
) =>
  Object.fromEntries(
    Object.entries(attrs).filter(
      ([attrKey]) =>
        !Object.keys(props).some(
          (propKey) => camelize(propKey) === camelize(attrKey)
        ) && !keys.some((key) => camelize(key) === camelize(attrKey))
    )
  )
