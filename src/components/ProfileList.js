import React from 'react'
import Profile from './Profile'
import { useQuery } from 'react-apollo-hooks'
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
  const { data, error, loading } = useQuery(FEED_QUERY)
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }
  const profiles = data.feed
  return (
    <div>
      {profiles.map(profile => <Profile key={profile.id} profile={profile} />)}
    </div>
  )
}
