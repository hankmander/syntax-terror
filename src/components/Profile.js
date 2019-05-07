import React from 'react'

export default function Profile ({ profile }) {
  return <div>
    <div>
      {profile.title} ({profile.remote})
    </div>
  </div>
}
