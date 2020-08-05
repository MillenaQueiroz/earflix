import styled from 'styled-components';


export const Table = styled.table`
    width: 80%;
    font-size: 16px;
    border-spacing: 0 3px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 800px) {
        width: 100%;
        padding: 0 20px;
    }
    th {
        font-weight: 600;
    }
    th, tr, td {
        padding: 10px 20px;
        text-align: center;
    }
    tr:not(:first-of-type), td {
        border: 1px solid white;
    }
    tr:hover td {
        background-color: rgba(212,205,14,0.87);
        color: black;
        
    }
`;