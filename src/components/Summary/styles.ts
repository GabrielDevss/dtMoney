import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;
  color: var(--text-title);


  div {
    background: var(--shape);
    padding:  2rem;
    border-radius: 0.25rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      font-size: 2.25rem;
      margin-top: 1rem;
      font-weight: 500;
      line-height: 3rem;
    }
    &.total-background {
      background: var(--green);
      color: #fff;
    }
  }
`; 