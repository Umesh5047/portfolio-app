export const save = (k, v) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(k, JSON.stringify(v))
  }
}

export const load = (k) => {
  if (typeof window === 'undefined') return null
  try {
    return JSON.parse(localStorage.getItem(k))
  } catch {
    return null
  }
}

export const remove = (k) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(k)
  }
}
