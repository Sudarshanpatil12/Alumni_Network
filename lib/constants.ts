export const departments = [
  { value: "csbs", label: "Computer Science & Business Systems" },
  { value: "aiml", label: "Artificial Intelligence & Machine Learning" },
  { value: "cse-ds", label: "Computer Science Engineering - Data Science" },
  { value: "cybersecurity", label: "Cybersecurity Engineering" },
  { value: "iota", label: "Internet of Things & Applications" },
]

export const graduationYears = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i)
