import React from 'react'
import styled from 'styled-components'
import { colors } from '../constants/colors'

const StyledMainLayout = styled.div`
    .parent-page {
        background-color: ${colors.white};
        height: 100vh;
        overflow: hidden;
        position: relative; 
    }
    .page {
        display: flex;
        align-items: flex-start;
    }
    .main-container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        padding-left: 0px;
        width: 100%;
        justify-content: space-between;
    }
    .main {
        height: 100vh;
        overflow: auto;
        padding-bottom: 36px;
        padding-top: 4px;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        overflow: hidden;
    }
`

interface MasterLayoutProps {
  children: React.ReactNode
}

function MasterLayout ({ children }: MasterLayoutProps) {
  return (
        <StyledMainLayout>
            <div className="parent-page">
                <div className="page">
                    <div className="main-container">
                        <div className="main">{children}</div>
                    </div>
                </div>
            </div>
        </StyledMainLayout>
  )
}

export default MasterLayout
