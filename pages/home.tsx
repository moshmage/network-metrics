import Container from '@components/container';
import Row from '@components/row';
import Column from '@components/column';
import NavBar from '@components/nav-bar';
import PageHeader from '@components/page-header';
import CirculatingSupply from '@components/circulating-supply';
import DistributedEpoch from '@components/distributed-epoch';
import IconUSDC from '@icons/IconUSDC';
import Circle from '@components/Circle';

export default function HomePage() {
  return <>
    <NavBar />
    <PageHeader />
    <Container background="body">
      <Row>
        <CirculatingSupply />
        <DistributedEpoch />
      </Row>
      <Row>
        <Column className="bg-shadow">
          <h4 className="mb-3">Protocol metrics</h4>
          <Row>
            <Column className="bg-dark-gray">
              <h4 className="d-flex justify-content-between color-white mb-3">
                <span>Transactional</span>
                <Circle className="color-white bg-primary" width={24} height={24}><IconUSDC /></Circle>
              </h4>
              <Row>
                <Column size={3} className="text-center border-right border-light-dark-gray py-2 px-0">4.2M</Column>
                <Column size={3} className="text-center border-right border-light-dark-gray py-2 px-0">42K</Column>
                <Column size={3} className="text-center border-right border-light-dark-gray py-2 px-0">$4.2M</Column>
                <Column size={3} className="text-center py-2 px-0">4.2%</Column>
              </Row>
            </Column>
            <Column>hey</Column>
          </Row>
        </Column>
      </Row>
    </Container>
  </>
}
