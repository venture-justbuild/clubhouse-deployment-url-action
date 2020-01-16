import core from '@actions/core'
import github from '@actions/github'

async function run(): Promise<void> {
  try {
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    core.debug(payload)
    core.setOutput('payload', payload)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
