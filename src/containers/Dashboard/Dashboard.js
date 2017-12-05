import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import Table from '../../components/UI/Table/Table'
import {QuickSummary} from '../../components/Widgets/Widgets'

class Dashboard extends Component {
  render() {
    const data={
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov'],
      datasets: [{
          label: '# of Visitors',
          data: [1320, 1930, 1040, 2550, 2240, 2300, 1980, 2675, 3004, 2724, 1800 ],
          backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      }
    return (
      <div>
        <section className="dashboard__section-margin">
          <div className="row">
            <div className="col-12 col-md-6">
              <div>
                <Line 
                  data={data}
                  options={{
                    responsive: true
                  }}
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <Table />
            </div>
          </div>
        </section>
        <section className="dashboard__section-margin">
          <div className="row">
            <div className="col-6 col-lg-3 dashboard__item-margin">
              <QuickSummary
                rootClassName="bg-primary text-white h-100"
                headerInfo='428'
                bottomInfo='New Unique Users'
                iconName='group_add'
              />
            </div>
            <div className="col-6 col-lg-3 dashboard__item-margin">
              <QuickSummary
                rootClassName="bg-secondary text-white h-100"
                headerInfo='1958'
                bottomInfo='Active Users'
                iconName='person'
              />
            </div>
            <div className="col-6 col-lg-3 dashboard__item-margin">
              <QuickSummary
                rootClassName="bg-warning text-white h-100"
                headerInfo='195'
                bottomInfo='Orders registered'
                iconName='poll'
              />
            </div>
            <div className="col-6 col-lg-3 dashboard__item-margin">
              <QuickSummary
                rootClassName="bg-info text-white h-100"
                headerInfo='28'
                bottomInfo='New Notifications'
                iconName='notifications_active'
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;