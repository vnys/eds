import { render, cleanup, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import styled from 'styled-components'
import { Typography } from '../Typography'
import * as tokens from './Card.tokens'
import { trimSpaces } from '../../utils'

import { Card } from '.'

const { Header, HeaderTitle, Media, Actions } = Card

const { info } = tokens

const StyledCard = styled(Card)`
  position: relative;
  height: 100px;
  width: 100px;
`
const StyledHeader = styled(Header)`
  position: relative;
  height: 100px;
  width: 100px;
`

const StyledHeaderTitle = styled(HeaderTitle)`
  position: relative;
  height: 100px;
  width: 100px;
`

const StyledMedia = styled(Media)`
  position: relative;
  height: 100px;
  width: 100px;
`

const StyledActions = styled(Actions)`
  position: relative;
  height: 100px;
  width: 100px;
`

afterEach(cleanup)

describe('Card', () => {
  it('Matches snapshot', () => {
    const { asFragment } = render(
      <Card>
        <Card.Media fullWidth>
          <img src="https://i.imgur.com/UM3mrju.jpg" alt="cat" />
        </Card.Media>
        <Card.Header>
          <Card.HeaderTitle>
            <Typography variant="h5">Another interactive example</Typography>
            <Typography variant="body_short">
              Unfortunately you cannot control children in storybook yet
            </Typography>
          </Card.HeaderTitle>
        </Card.Header>
        <Typography variant="body_short">
          Leading images are full width, and go straight to the top - ignoring
          spacings
        </Typography>
      </Card>,
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it('Has correct color', () => {
    render(<Card variant="info" data-testid="card" />)
    const card = screen.getByTestId('card')
    expect(card).toHaveStyleRule(
      'background-color',
      trimSpaces(info.background),
    )
  })
  it('Has provided title and subtitle in CardHeaderTitle', () => {
    const title = 'Title'
    const subtitle = 'subtitle'
    render(
      <Card>
        <Header>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body_short">{subtitle}</Typography>
        </Header>
      </Card>,
    )

    expect(screen.queryByText(title)).toBeDefined()
    expect(screen.queryByText(subtitle)).toBeDefined()
  })
  it('Has provided image source and placement in Media', () => {
    const fullWidth = 'fullWidth'
    const src = 'https://i.imgur.com/UM3mrju.jpg'
    render(
      <Card>
        <Media fullWidth>
          <img src={src} alt="alt" />
        </Media>
      </Card>,
    )

    expect(screen.queryByText(fullWidth)).toBeDefined()
    expect(screen.queryByText(src)).toBeDefined()
  })
  it('CardActions items are placed correctly', () => {
    render(
      <Card>
        <Actions alignRight data-testid="card-actions">
          <button type="button">Click me!</button>
        </Actions>
      </Card>,
    )
    expect(screen.getByTestId('card-actions')).toHaveStyleRule(
      'justify-content',
      'flex-end',
    )
  })
  it('Can extend the css for the Card Component', () => {
    render(<StyledCard data-testid="test-me" />)
    const card = screen.getByTestId('test-me')
    expect(card).toHaveStyleRule('position', 'relative')
    expect(card).toHaveStyleRule('height', '100px')
    expect(card).toHaveStyleRule('width', '100px')
  })
  it('Can extend the css for the Header Component', () => {
    render(<StyledHeader data-testid="test-me" />)
    const cardHeader = screen.getByTestId('test-me')
    expect(cardHeader).toHaveStyleRule('position', 'relative')
    expect(cardHeader).toHaveStyleRule('height', '100px')
    expect(cardHeader).toHaveStyleRule('width', '100px')
  })
  it('Can extend the css for the HeaderTitle Component', () => {
    render(<StyledHeaderTitle data-testid="test-me" />)
    const cardHeaderTitle = screen.getByTestId('test-me')
    expect(cardHeaderTitle).toHaveStyleRule('position', 'relative')
    expect(cardHeaderTitle).toHaveStyleRule('height', '100px')
    expect(cardHeaderTitle).toHaveStyleRule('width', '100px')
  })
  it('Can extend the css for the Media Component', () => {
    render(<StyledMedia data-testid="test-me" />)
    const cardMedia = screen.getByTestId('test-me')
    expect(cardMedia).toHaveStyleRule('position', 'relative')
    expect(cardMedia).toHaveStyleRule('height', '100px')
    expect(cardMedia).toHaveStyleRule('width', '100px')
  })
  it('Can extend the css for the Actions Component', () => {
    render(<StyledActions data-testid="test-me" />)
    const cardActions = screen.getByTestId('test-me')
    expect(cardActions).toHaveStyleRule('position', 'relative')
    expect(cardActions).toHaveStyleRule('height', '100px')
    expect(cardActions).toHaveStyleRule('width', '100px')
  })
})
