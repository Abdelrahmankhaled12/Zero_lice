// src/services/api.ts

const API_BASE_URL = "https://be.zerolice.ae/public/";

/**
 * Interface for Contact Us request data
 */
interface ContactUsData {
    name: string;
    email: string;
    message: string;
}

/**
 * Interface for API response
 */
interface ApiResponse<T> {
    status: number;
    data: T;
    ok: boolean;
}

/**
 * Contact Us API Service
 * 
 * @param {ContactUsData} data - The contact form data
 * @returns {Promise<ApiResponse<any>>} - API response
 * @throws {Error} - Network or API error
 */

export const CONTACT_US = async (data: ContactUsData): Promise<ApiResponse<any>> => {
    try {
        const response = await fetch(`${API_BASE_URL}api/v1/contact-us`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if (!response.ok) {
            // Handle API errors (4xx, 5xx)
            throw new Error(responseData.message || 'Failed to submit contact form');
        }

        return {
            status: response.status,
            data: responseData,
            ok: response.ok
        };

    } catch (error) {
        // Handle network errors or JSON parsing errors
        console.error('API call failed:', error);
        throw new Error(
            error instanceof Error
                ? error.message
                : 'An unexpected error occurred'
        );
    }
};

// =========================================================================================
// =========================================================================================

/**
 * Interface for API response data structure
 */
interface PricingApiResponse {
    status: number;
    data: {
        data: Array<{
            id: number;
            title: string;
            price: string;
            description: string;
            features: string[];
            image?: string;
        }>;
    };
}

/**
 * Fetches pricing packages from the API
 * 
 * @returns {Promise<PricingApiResponse>} - A promise that resolves with the pricing data
 * @throws {Error} - Throws an error if the request fails
 */

export const PRICING_GET = async (): Promise<PricingApiResponse> => {
    try {
        const response = await fetch(`${API_BASE_URL}api/v1/packages`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                // Add any other required headers here
            },
        });

        // Handle HTTP errors
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch pricing data');
        }

        const jsonData = await response.json();

        return {
            status: response.status,
            data: jsonData,
        };
    } catch (error) {
        console.error('Pricing fetch error:', error);
        
        // Enhance error information
        let errorMessage = 'Network request failed';
        if (error instanceof Error) {
            errorMessage = error.message;
        }

        throw new Error(`Failed to get pricing information: ${errorMessage}`);
    }
};