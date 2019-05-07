import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
  mutation PostMutation($title: String!, $remote: Boolean!){
  createProfile(
    input: {
      title: $title
      remote: $remote
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
  const [remote, updateRemote] = useState(true)

  return <div>
    <div >
      <input
        value={title}
        onChange={e => updateTitle(e.target.value)}
        type='text'
        placeholder='A title for the profile'
      />
      <input
        value={remote}
        onChange={e => updateRemote(e.target.value)}
        type='radio'
        placeholder='The REMOTE for the profile'
      />
    </div>
    <Mutation
      mutation={POST_MUTATION}
      variables={{ title, remote }}
      onCompleted={() => props.history.push('/')}
    >
      {postMutation => <button onClick={postMutation}>Submit</button>}
    </Mutation>
  </div>
}
