import { render } from "@testing-library/react"
import Content from "../model/Content.model"
import InfinityContentHolder from "./InfinityContentHolder"

describe('InfinityContentHolder', () => {
  it('should not render if input list is empty', () => {
    const { getByTestId } = render(<InfinityContentHolder contents={[]} />)
    expect(() => getByTestId("infinity-content-holder")).toThrowError()
  })

  it('should render one element if input list has one element', () => {
    const content1 = new Content("test 1", "content test")
    const { getAllByText } = render(
      <InfinityContentHolder contents={[content1]} />
    )
    const item = getAllByText("test 1")

    expect(item).toBeTruthy()
  })

  it('should render multiple elements', () => {
    const content1 = new Content("test 1", "content test")
    const content2 = new Content("test 2", "content test")
    const { getAllByText } = render(
      <InfinityContentHolder contents={[content1, content2]} />
    )

    expect(getAllByText("test 1")).toBeTruthy()
    expect(getAllByText("test 2")).toBeTruthy()
  })
})