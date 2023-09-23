import React from 'react'
import { BsCheckLg } from 'react-icons/bs'

export default function Checkers({data}) {
  return (
    <section className="mt-4">
                  {/* <h2 className="mt-1 text-xl font-semibold">
                    Нашите услуги по преместване на дома:
                  </h2> */}
                  <section className="mt-2">
                    {data.map(header=>{
                        return <div key={header} className="mb-2">
                        <h3 className="flex items-center font-semibold">
                          <span className="pr-1 text-green">
                            <BsCheckLg />
                          </span>
                          {header}
                        </h3>
                        {/* <p>
                          Разполагаме с надеждни камиони за преместване и
                          висококачествено оборудване, за да осигурим лесно и
                          безопасно транспортиране.
                        </p> */}
                      </div>
                    })}
                 
                  </section>
                </section>
  )
}
