'use client'
import { useEffect, useState } from 'react';

export default function Products({ searchParams }) {
  const [params, setParams] = useState(null);
  console.log(params)

  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await searchParams;
      setParams(resolvedParams);
      console.log(resolvedParams);
    }
    fetchParams();
  }, [searchParams]);

  return <h2>thsi is Products pages</h2>;
}
