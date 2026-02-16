import RootLayout from "@/app/layout"
import { describe, expect, test } from "vitest"

describe("RootLayout responsive shell", () => {
    test("uses fluid body dimensions instead of viewport-locked values", () => {
        const tree = RootLayout({ children: null })
        const body = tree.props.children
        const style = body.props.style as Record<string, string | undefined>

        expect(style.width).toBe("100%")
        expect(style.minHeight).toBe("100dvh")
        expect(style.height).toBeUndefined()
    })
})
