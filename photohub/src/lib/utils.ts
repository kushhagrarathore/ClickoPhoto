import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
  }).format(price)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function formatDateTime(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

export function calculateBookingTotal(
  rate: number,
  hours: number,
  platformFeePercent: number = 10,
  taxPercent: number = 8
): {
  subtotal: number
  fees: number
  tax: number
  total: number
} {
  const subtotal = rate * hours
  const fees = (subtotal * platformFeePercent) / 100
  const tax = (subtotal * taxPercent) / 100
  const total = subtotal + fees + tax

  return {
    subtotal: Math.round(subtotal * 100) / 100,
    fees: Math.round(fees * 100) / 100,
    tax: Math.round(tax * 100) / 100,
    total: Math.round(total * 100) / 100,
  }
}
