import React from 'react'
import Profile from './Profile'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
  {
    feed {
      id
      remote
      title
    }
  }
`

export default function ProfileList (props) {
  return (
    <Query query={FEED_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>
        const profiles = data.feed
        return (
          <div>
            {profiles.map(profile => <Profile key={profile.id} profile={profile} />)}
          </div>
        )
      }}
    </Query>
  )
}
