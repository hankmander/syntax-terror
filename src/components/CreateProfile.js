import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
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

export default function CreateProfile (props) {
  const [title, updateTitle] = useState('')
  const [remote, updateRemote] = useState(false)
  const [experience, updateExperience] = useState('')

  return <>
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
    <Mutation
      mutation={POST_MUTATION}
      variables={{ title, remote, experience }}
      onCompleted={() => props.history.push('/')}
    >
      {postMutation => <button onClick={postMutation}>Submit</button>}
    </Mutation>
  </>
}
