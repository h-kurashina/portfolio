import { expect, test } from '@playwright/test'
import { filterWorks } from '../src/data/content'

test('language and field filters intersect and support multiple tags', () => {
  const works = [
    { id: 'a', title: 'A', description: '', languages: ['Python', 'Go'], fields: ['インフラ', 'セキュリティ'] },
    { id: 'b', title: 'B', description: '', languages: ['TypeScript'], fields: ['Webアプリ'] },
  ]
  expect(filterWorks(works, 'Python', 'セキュリティ').map(work => work.id)).toEqual(['a'])
  expect(filterWorks(works, 'TypeScript', 'インフラ')).toEqual([])
  expect(filterWorks(works, '', '')).toHaveLength(2)
})

test('entrance, hover handoff, fade out, menu and section links', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'h.kurashina Portfolio', exact: true })).toBeVisible()
  await expect(page.locator('.works-content')).toHaveCSS('opacity', '1')
  await expect(page.locator('.project-row').last()).toBeInViewport({ ratio: 1 })
  expect(await page.evaluate(() => document.documentElement.scrollHeight <= innerHeight)).toBe(true)
  await page.screenshot({ path: test.info().outputPath('portfolio-home.png') })
  const rows = page.locator('.project-row')
  await expect(rows).toHaveCount(4)
  await rows.nth(0).hover()
  const before = await rows.nth(1).boundingBox()
  await expect(rows.nth(1)).toHaveCSS('opacity', '0.4')
  await expect(page.locator('.project-preview-image').nth(0)).toHaveCSS('opacity', '1')
  await rows.nth(1).hover()
  await expect(page.locator('.projects-page')).toHaveCSS('background-color', 'rgb(224, 237, 242)')
  await expect(page.locator('.project-preview-image').nth(1)).toHaveCSS('opacity', '1')
  await expect(page.locator('.project-preview-image').nth(0)).toHaveCSS('opacity', '0')
  expect(await rows.nth(1).boundingBox()).toEqual(before)
  await page.screenshot({ path: test.info().outputPath('portfolio-hover.png') })
  await page.mouse.move(1300, 800)
  await expect(page.locator('.project-preview-image').nth(1)).toHaveCSS('opacity', '0')
  await expect(rows.nth(0)).toHaveCSS('opacity', '1')
  await page.getByRole('button', { name: 'Open menu' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).not.toBeVisible()
  await expect(page.getByRole('button', { name: 'Open menu' })).toBeFocused()
  await page.getByRole('link', { name: /Development —/ }).click()
  await expect(page).toHaveURL(/\/development$/)
  await page.getByLabel('言語', { exact: true }).selectOption('Python')
  await page.getByLabel('分野', { exact: true }).selectOption('セキュリティ')
  await page.getByRole('button', { name: '絞り込みを解除' }).click()
  await expect(page.getByLabel('言語', { exact: true })).toHaveValue('')
  await page.goto('/books')
  await page.getByRole('button', { name: 'おすすめ', exact: true }).click()
  await expect(page.getByRole('button', { name: 'おすすめ', exact: true })).toHaveAttribute('aria-pressed', 'true')
  await page.goto('/personal')
  await expect(page.getByRole('link', { name: /GitHub @h-kurashina/ })).toHaveAttribute('href', 'https://github.com/h-kurashina')
  await expect.poll(() => page.locator('.profile-photo').evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true)
  await expect(page.getByRole('link', { name: /h.kurashina49@gmail.com/ })).toHaveAttribute('href', 'mailto:h.kurashina49@gmail.com')
  await expect(page.getByRole('link', { name: /エムキャピタル株式会社/ })).toHaveAttribute('href', 'https://mhdg-mcapital.co.jp/')
  await page.screenshot({ path: test.info().outputPath('portfolio-personal.png'), fullPage: true })
  expect(errors).toEqual([])
})

test('mobile layout and reduced motion remain usable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  for (const path of ['/', '/personal', '/development', '/daily-notes', '/books']) {
    await page.goto(path)
    await expect(page.locator('.works-content')).toHaveCSS('opacity', '1')
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    await expect(page.locator('.custom-pointer')).not.toBeVisible()
    if (path === '/personal') await page.screenshot({ path: test.info().outputPath('portfolio-personal-mobile.png'), fullPage: true })
  }
  await page.goto('/')
  for (const viewport of [{ width: 390, height: 844 }, { width: 375, height: 667 }, { width: 320, height: 568 }]) {
    await page.setViewportSize(viewport)
    await expect(page.locator('.project-row').last()).toBeInViewport({ ratio: 1 })
    expect(await page.evaluate(() => document.documentElement.scrollHeight <= innerHeight)).toBe(true)
  }
  await page.setViewportSize({ width: 390, height: 844 })
  await page.screenshot({ path: test.info().outputPath('portfolio-mobile.png') })
  await page.getByRole('button', { name: 'Open menu' }).click()
  await page.getByRole('link', { name: '04 Books' }).click()
  await expect(page.getByRole('heading', { name: 'Books', exact: true })).toBeVisible()
})

test('books combine subject and reading filters and reset correctly', async ({ page }) => {
  await page.goto('/books')
  await expect(page.locator('.book-card')).toHaveCount(8)
  await page.getByRole('button', { name: '未読', exact: true }).click()
  await expect(page.locator('.book-card')).toHaveCount(2)
  await expect(page.getByRole('heading', { name: 'データ指向アプリケーションデザイン' })).toBeVisible()
  await page.getByLabel('言語・技術', { exact: true }).selectOption('Rust')
  await expect(page.locator('.book-card')).toHaveCount(1)
  await page.getByLabel('分野', { exact: true }).selectOption('分散システム')
  await expect(page.locator('.book-card')).toHaveCount(0)
  await page.getByRole('button', { name: '絞り込みを解除' }).click()
  await expect(page.locator('.book-card')).toHaveCount(8)
  await page.screenshot({ path: test.info().outputPath('portfolio-books.png'), fullPage: true })
})
