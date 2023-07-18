import PropTypes from 'prop-types'
import Link from 'next/link'
import ButtonWrapper from './button-wrapper'

import { useContext } from 'react'
import { LoadingContext } from '@/contexts/loading'

export default function CategoriesButtons({ categories, showCounter = true, currentCategory = 'all' }) {

  // Get set state from context
  const { setIsLoading } = useContext(LoadingContext)

  return (
    <section className="categories container mx-auto px-2">
      <h2 className='hidden'>Categorias</h2>
      <ul
        className={`
          flex flex-wrap justify-start gap-1
        `}
      >
        {categories.map(({ name, counter, id }) => (
          <li
            key={name}
          >
            <ButtonWrapper
              active={currentCategory === id}
              hover={currentCategory !== id}
            >
              <Link
                href={`/categories/${id}`}
                className={`
                  w-full h-full inline-block
                  px-6 py-2  
                `}
                onClick={() => {
                  // Show loading
                  setIsLoading(true)
                }}
              >
                <span>
                  {name}
                </span>
                {
                  showCounter &&
                  <span>
                    &nbsp;({counter})
                  </span>
                }
              </Link>
            </ButtonWrapper>
          </li>
        ))}
      </ul>
    </section>
  )
}

CategoriesButtons.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  showCounter: PropTypes.bool,
  currentCategory: PropTypes.string,
}