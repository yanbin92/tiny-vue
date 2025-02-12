import { test, expect } from '@playwright/test'

test('base', async ({ page }) => {
  await page.goto('chart-waterfall#waterfall-base')
  const chart = page.locator('#waterfall-base .hui-chart')
  await expect(chart).toHaveScreenshot('base.png')
})

test('demo2', async ({ page }) => {
  await page.goto('chart-waterfall#waterfall-demo2')
  const chart = page.locator('#waterfall-demo2 .hui-chart')
  await expect(chart).toHaveScreenshot('demo2.png')
})

test('demo3', async ({ page }) => {
  await page.goto('chart-waterfall#waterfall-demo3')
  const chart = page.locator('#waterfall-demo3 .hui-chart')
  await expect(chart).toHaveScreenshot('demo3.png')
})

test('demo4', async ({ page }) => {
  await page.goto('chart-waterfall#waterfall-demo4')
  const chart = page.locator('#waterfall-demo4 .hui-chart')
  await expect(chart).toHaveScreenshot('demo4.png')
})

test('demo5', async ({ page }) => {
  await page.goto('chart-waterfall#waterfall-demo5')
  const chart = page.locator('#waterfall-demo5 .hui-chart')
  await expect(chart).toHaveScreenshot('demo5.png')
})
