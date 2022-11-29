import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={103}
      viewBox='0 0 400 103'
      backgroundColor='#f3f3f3'
    >
      <rect x='2' y='3' rx='3' ry='3' width='88' height='10' />
      <rect x='49' y='57' rx='0' ry='0' width='1' height='18' />
      <rect x='2' y='34' rx='0' ry='0' width='70' height='40' />
      <rect x='78' y='34' rx='0' ry='0' width='70' height='40' />
      <rect x='156' y='34' rx='0' ry='0' width='70' height='40' />
    </ContentLoader>
  )
}

export default Loader
