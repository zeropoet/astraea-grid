import { render } from "@testing-library/react"
import GridEngine from "@/components/GridEngine"
import { describe, expect, test, vi } from "vitest"

vi.mock("p5", () => {
    class MockP5 {
        setup?: () => void
        draw?: () => void
        mouseX = -1
        mouseY = -1
        constructor(sketch: (p: MockP5) => void) {
            sketch(this)
            this.setup?.()
        }
        createCanvas() {
            return {
                style: () => undefined
            }
        }
        background() {
            return undefined
        }
        noise() {
            return 0
        }
        pixelDensity() {
            return undefined
        }
        resizeCanvas() {
            return undefined
        }
        translate() {
            return undefined
        }
        strokeWeight() {
            return undefined
        }
        stroke() {
            return undefined
        }
        line() {
            return undefined
        }
        noStroke() {
            return undefined
        }
        fill() {
            return undefined
        }
        circle() {
            return undefined
        }
        remove() {
            return undefined
        }
    }
    return { default: MockP5 }
})

class MockResizeObserver {
    observe() {
        return undefined
    }
    disconnect() {
        return undefined
    }
}

describe("GridEngine host sizing", () => {
    test("renders a fluid host container for any parent layout", () => {
        Object.defineProperty(window, "ResizeObserver", {
            writable: true,
            value: MockResizeObserver
        })

        const { container } = render(<GridEngine />)
        const host = container.firstElementChild as HTMLDivElement

        expect(host.style.position).toBe("relative")
        expect(host.style.width).toBe("100%")
        expect(host.style.height).toBe("100%")
        expect(host.style.minHeight).toBe("100dvh")
        expect(host.style.overflow).toBe("hidden")
    })
})
