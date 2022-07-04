


import LayoutLeft from './layout-left';
import LayoutRight from './layout-right';
import LayoutMiddle from './layout-middle';

const data ={
    "background":"https://img.freepik.com/free-vector/realistic-galaxy-background_52683-12122.jpg?t=st=1656949107~exp=1656949707~hmac=65c5ef65b0950473d281248a405527f227513f2e6e3ca91f165608882963768a&w=2000"
}

function Layout() {

    return (
        <div id='layout' style={{}}>
            <LayoutLeft></LayoutLeft>
            <LayoutMiddle></LayoutMiddle>
            <LayoutRight></LayoutRight>
        </div>
      );
}

export default Layout;
