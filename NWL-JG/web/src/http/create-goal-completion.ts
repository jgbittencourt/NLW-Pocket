export async function createGoalCompletions(goalId: string) {
  await fetch('http://localhost:3333/completions', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalId,
    }),
  })
}
