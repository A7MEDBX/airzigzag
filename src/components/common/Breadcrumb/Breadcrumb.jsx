import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import Container from '../Container/Container';

export const Breadcrumb = ({ items = [] }) => {
  return (
    <div className="bg-light-gray py-3 border-b border-gray-200/50">
      <Container>
        <nav className="flex items-center space-x-2 text-sm text-gray-500 font-heading">
          <Link
            to="/"
            className="flex items-center hover:text-accent-gold transition-colors"
          >
            <Home className="h-4 w-4 mr-1" />
            <span>Home</span>
          </Link>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={index}>
                <ChevronRight className="h-4 w-4 text-gray-400 shrink-0" />
                {isLast ? (
                  <span className="text-primary font-medium truncate">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="hover:text-accent-gold transition-colors truncate"
                  >
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </Container>
    </div>
  );
};

export default Breadcrumb;
