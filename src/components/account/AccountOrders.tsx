'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Package, Download, Eye } from 'lucide-react'

// Mock orders data
const mockOrders = [
  {
    id: 'ORD-001',
    date: '2024-12-15',
    status: 'completed',
    total: 299,
    items: [
      { id: 1, name: 'Evening Elegance Gown Design', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop', price: 299, quantity: 1 },
    ],
  },
  {
    id: 'ORD-002',
    date: '2024-12-10',
    status: 'completed',
    total: 449,
    items: [
      { id: 9, name: 'Bridal Elegance Gown Design', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=200&fit=crop', price: 449, quantity: 1 },
    ],
  },
]

export default function AccountOrders() {
  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-2xl font-playfair font-bold text-foreground mb-6">Order History</h2>
        
        {mockOrders.length === 0 ? (
          <div className="text-center py-12">
            <Package className="mx-auto text-muted-foreground mb-4" size={48} />
            <p className="text-muted-foreground mb-4">You haven't placed any orders yet.</p>
            <Link href="/shop">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {mockOrders.map((order) => (
              <div key={order.id} className="border border-border rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <div>
                    <p className="font-semibold text-foreground">Order #{order.id}</p>
                    <p className="text-sm text-muted-foreground">Placed on {new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                    <p className="font-semibold text-foreground">${order.total}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-20 h-20 bg-muted rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        <p className="text-sm font-semibold text-primary">${item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Download size={16} />
                          Download
                        </Button>
                        <Link href={`/product/${item.id}`}>
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <Eye size={16} />
                            View
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}



