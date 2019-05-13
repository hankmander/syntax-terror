import React, { useState } from 'react'
import { useMutation } from 'react-apollo-hooks'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
  mutation PostMutation($title: String!, $remote: Boolean!, $experience: Int!){
  createProfile(
    input: {
      title: $title
      remote: $remote
      experience: $experience
    }
  ) {
      profile {
        title
        id
        remote
      }
    authToken
  }
}
`

export default function CreateProfile ({ history, match }) {
  const [title, updateTitle] = useState('')
  const [remote, updateRemote] = useState(false)
  const [experience, updateExperience] = useState('')
  const [updateMessage, updateUpdateMessage] = useState('')
  const authToken = window.location.search.match(/\?token=(.+)/)

  const create = useMutation(POST_MUTATION, {
    update: (proxy, { data: { createProfile } }) => {
      // update is called when mutation is done. Inform user
      updateUpdateMessage('Job posted!')
      //window.location.search = `?token=${createProfile.authToken}`
    },
    variables: { title, remote, experience }
  })

  return <>
    <h2>{updateMessage}</h2>
    <div>
      <input
        value={title}
        onChange={e => updateTitle(e.target.value)}
        type='text'
        placeholder='A title for the profile'
      />
      <input
        value={experience}
        onChange={e => updateExperience(parseInt(e.target.value))}
        type='number'
        min='0'
        step='1'
        placeholder='years of relevant experience'
      />
      <label htmlFor='remote'>Can work remote</label>
      <input
        id='remote'
        value={remote}
        onChange={e => updateRemote(e.target.checked)}
        type='checkbox'
      />
    </div>
    <button onClick={create}>Submit</button>
  </>
}
