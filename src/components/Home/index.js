import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <div className="bg-container">
        <Header />
        <div>
          <h1 className="main-heading">
            {' '}
            Find The Job That <br /> Fits Your Life
          </h1>
          <p className="description">
            Millions of people are searching for job, salary <br />
            information, company reviews. Find the job that fits your <br />
            abilities and potential
          </p>
          <button type="button" className="button">
            Find Job
          </button>
        </div>
      </div>
    </>
  )
}
export default Home
