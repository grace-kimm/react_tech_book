import Categories from './components/Categories';
import NewsList from './components/NewsList';
import { useParams } from 'react-router-dom';

const NewsPage = ({match}) => {
  const category = match.params.category || 'all';
  console.log(category)

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  )
}

export default NewsPage;