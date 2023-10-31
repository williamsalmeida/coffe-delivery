import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding: 2rem 1rem;

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    button {
      border: none;
    }

    .location {
      display: flex;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      border-radius: 0.375rem;

      color: ${(props) => props.theme['purple-800']};
      background: ${(props) => props.theme['purple-300']};

      svg {
        color: ${(props) => props.theme['purple-500']};
      }
    }

    .cart {
      display: flex;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      border-radius: 0.375rem;

      color: ${(props) => props.theme['yellow-800']};
      background: ${(props) => props.theme['yellow-300']};
    }
  }
`

export const HeroContainer = styled.section`
  max-width: 1180px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding: 2rem 1rem;
  gap: 3.5rem;
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;

  .title {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    strong {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      line-height: 130%;
      font-weight: 800;
      color: ${(props) => props.theme['gray-900']};
    }

    span {
      font-size: 1.5rem;
    }
  }

  .items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    .item {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .icon {
        svg {
          color: ${(props) => props.theme.white};
          display: flex;
          width: 2rem;
          height: 2rem;
          padding: 0.5rem;
          border-radius: 50%;
        }
      }

      .shopping-cart {
        background: ${(props) => props.theme['yellow-800']};
      }
      .package {
        background: ${(props) => props.theme['gray-700']};
      }
      .timer {
        background: ${(props) => props.theme['yellow-500']};
      }
      .coffee {
        background: ${(props) => props.theme['purple-500']};
      }
    }
  }
`
