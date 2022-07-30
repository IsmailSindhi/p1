import Button from '@components/Button';
import Clock from '@components/Icons/Clock';
import { NextPageWithLayout } from '@config/types';
import Home from '@views/Home';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Home />
      <Button />
      <div className="sm:bg-red-500">
        <Clock />
        fsafsaf
      </div>
    </>
  );
};

// HomePage.getLayout = (page) => {
//   return (
//     <div>
//       <nav>Nav</nav>
//       {page}
//     </div>
//   );
// };

export default HomePage;
