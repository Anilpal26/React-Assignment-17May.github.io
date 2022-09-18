import './App.css';
import Table from 'react-bootstrap/Table';

function App() {
  return (
    <main>
      <div className='sideNave'>
        <div className='imgDIv'>
          <img className='profile1' src='https://t3.ftcdn.net/jpg/03/32/58/88/360_F_332588811_bYNAWoxbBHaAvIFfHNKk71OZrNBlzAVQ.jpg' />
          <h1>Anil Pal</h1>
        </div>
        <div>
        <hr/>
          <div className='sideNavDiv'>
            <span className='sideNavList'>🏛 Home</span>
          </div>
          <hr/>
          <div className='sideNavDiv'>
            <span className='sideNavList'>🎫 Dashboard</span>
          </div>
          <hr/>
          <div className='sideNavDiv'>
            <span className='sideNavList'>👨‍💻 Others</span>
          </div>
          <hr/>
          <div className='sideNavDiv'>
            <span className='sideNavList'>💲 Payments</span>
          </div>
          <hr/>
          <div className='sideNavDiv'>
            <span className='sideNavList'>🕖 Setting</span>
          </div>
          <hr/>
        </div>
      </div>
      <div className='homePage'>
        <div className='uprNavbar'>
          <span className='emailSpan'>📧</span>
          <span>
            <img className='profile2' src='https://t3.ftcdn.net/jpg/03/32/58/88/360_F_332588811_bYNAWoxbBHaAvIFfHNKk71OZrNBlzAVQ.jpg' />
          </span>
        </div>
        <div className='mainTableOne'>
          <span className='activeSpan'>Active Deposites</span> <span className='plusSign'>+</span>
          <div className='tableDiv1'>
            <Table className='striped bordered hover'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className='buttonDiv1'>
            <span className='activeBtn'>All Active Deposites</span>
          </div>

          <span className='activeSpan'>Closed Deposites</span>
          <div className='tableDiv1'>
            <Table className='striped bordered hover'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className='buttonDiv1'>
            <span className='activeBtn'>All Active Deposites</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
