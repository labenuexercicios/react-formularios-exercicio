import styled from 'styled-components'

export const MainContainer = styled.main`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    width: 65%;
    max-width: 500px;
    font-size: 1.3rem;
    background-color: white;
    padding: 20px;
    height: 70vh;
    margin-top: 30px;
  
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
    font-size: 1rem;
    height: 80%;
    justify-content: space-between;
  
 
`

export const Input = styled.input`  
    font-family: 'Montserrat';
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #DDE5E8;;
    background-color: #DDE5E8;
    color: #46535B;
    ::placeholder{
        color: #B8B3C0;
    }
`
export const Button = styled.button`
    background-color: #FE7D01;
    border: none;
    color: white;
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    font-family: 'Montserrat';
    font-size: 1.2rem;
    margin-top: 20px;
    :hover{
        background-color: #FE6D07;
    }

`