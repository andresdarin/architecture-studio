from playwright.sync_api import sync_playwright
import time
import os

def run():
    if not os.path.exists("verification"):
        os.makedirs("verification")

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1920, "height": 1080})

        print("Navigating to localhost:3000...")
        page.goto("http://localhost:3000", wait_until="networkidle")

        # Take full page screenshot
        print("Taking full page screenshot...")
        page.screenshot(path="verification/full_page.png", full_page=True)

        # Take section screenshots (estimating positions or using selectors)
        # Hero
        print("Taking Hero screenshot...")
        page.screenshot(path="verification/1_hero.png")

        # Scroll and take screenshots
        sections = ["projects", "process", "services", "contact"]
        # Assuming sections have IDs based on previous turns or standard practice.
        # I'll try to find them by text or generic scrolling if IDs are not known yet.
        # But looking at previous code or generic structure:

        # Scroll down a bit
        page.evaluate("window.scrollBy(0, 1000)")
        time.sleep(1)
        page.screenshot(path="verification/2_scroll_1.png")

        page.evaluate("window.scrollBy(0, 1000)")
        time.sleep(1)
        page.screenshot(path="verification/3_scroll_2.png")

        page.evaluate("window.scrollBy(0, 1000)")
        time.sleep(1)
        page.screenshot(path="verification/4_scroll_3.png")

        page.evaluate("window.scrollBy(0, 1000)")
        time.sleep(1)
        page.screenshot(path="verification/5_scroll_4.png")

        browser.close()
        print("Verification screenshots captured in 'verification/' directory.")

if __name__ == "__main__":
    run()
