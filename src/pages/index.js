import React from 'react'
import { icons } from '../constants'
import Layout from '../layouts/'
import styled from 'react-emotion'

const Wrap = styled('section')`
  max-width: 250px;
  padding: 2em;
  background: #45a344;
  color: white;
  .text {
    display: none;
  }
  .logo {
    font-size: 3em;
    font-weight: bold;
  }
`

const Logo = styled('div')`

`

const IndexPage = () => (
  <Layout>
    <Wrap>
      <div className='logo'>
        TL
      </div>
      <p className='text'>
        <strong>Hello, I'm Tyson Louth!</strong>
      </p>
    </Wrap>
  </Layout>
)

// const IndexPage = () => (
//   <Layout>
//     <div className="wrap flex items-center justify-center">
//       <div className="card">
//         <h1>Tyson Louth</h1>
//         <strong>Full Stack Developer</strong>
//         <p>
//           Currently the Lead Front End Developer at BitCine Technologies,
//           building&nbsp;
//           <a
//             target="_blank"
//             rel="noopener noreferrer"
//             href="https://cinesend.com/"
//           >
//             CineSend
//           </a>,&nbsp;
//           <a
//             target="_blank"
//             rel="noopener noreferrer"
//             href="https://www.festily.com/"
//           >
//             Festily
//           </a>&nbsp;&amp;&nbsp;
//           <a
//             target="_blank"
//             rel="noopener noreferrer"
//             href="https://piracydetector.com/"
//           >
//             Piracy Detector
//           </a>.
//         </p>
//         <div className="icons">
//           {icons.map((icon, index) => (
//             <a
//               key={icon.key}
//               href={icon.to}
//               target="_blank"
//               title={icon.label}
//               style={{ animationDelay: `2.${index}s` }}
//               rel="noopener noreferrer"
//             >
//               <img src={icon.icon} alt={icon.alt} />
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   </Layout>
// )

export default IndexPage
